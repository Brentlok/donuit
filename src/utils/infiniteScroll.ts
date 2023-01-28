export const infiniteScroll = (fn: () => void, el: HTMLElement | null) => {
    if (!el) {
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            if (!entries[0].isIntersecting) {
                return;
            }

            fn();
        },
        { threshold: 1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
};
