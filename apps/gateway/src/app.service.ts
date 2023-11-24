import { Injectable } from '@nestjs/common'

import pool from './lib/postgres'

@Injectable()
export class AppService {
  async getColor(request: { color: string }): Promise<string[]> {
    const searchQuery = `%${request.color.toLocaleLowerCase()}%`

    const { rows } = await pool.query('SELECT * FROM colors WHERE color ILIKE $1', [searchQuery])

    if (rows.length > 0) {
      return rows.map((row) => row.color) as string[]
    } else {
      return ['No color found'] as string[]
    }
  }
}
