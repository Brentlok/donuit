import type { Session } from '@auth/core/types'
import type { PrismaClient } from '@prisma/client'

export type Context = {
    prisma: PrismaClient,
    user: Session['user'],
}