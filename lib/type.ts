import type { YdbModelConstructorType } from 'ydb-orm'

export type YdbFastifyOptionsType = {
  endpoint: string
  database: string
  token?: string
  meta?: boolean
  model?: Array<YdbModelConstructorType>
  timeout?: number
  sync?: boolean
}
