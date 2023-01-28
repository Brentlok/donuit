import type { Donut } from "@prisma/client";
import { get, writable, type Writable, derived } from "svelte/store";

type Item = {
    product: Donut;
    count: number;
}

export class Cart {
    items = writable<Array<Writable<Item>>>([]);

    count = derived(this.items, () => {
        return get(this.items)
            .reduce((prev, curr) => prev + get(curr).count, 0);
    });

    total = derived(this.items, () => {
        return get(this.items)
            .reduce((prev, curr) => prev + get(curr).count * get(curr).product.price, 0)
            .toFixed(2);
    })

    add = (item: Item) => {
        const existed = get(this.items).find(x => get(x).product.id === item.product.id);

        if (existed) {
            existed.update(val => ({ ...val, count: val.count += item.count }));
            this.items.update(val => val);
            return;
        }

        this.items.update(val => [...val, writable(item)]);
    }

    update = (item: Item) => {
        const existed = get(this.items).find(x => get(x).product.id === item.product.id);

        if (!existed) {
            return;
        }

        if (item.count === 0) {
            this.items.update(val => val.filter(x => get(x).product.id !== item.product.id));
            return;
        }

        existed.update(val => ({ ...val, count: item.count }));
        this.items.update(val => val);
    }
}