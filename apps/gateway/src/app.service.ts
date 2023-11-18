import { Injectable } from '@nestjs/common'

import pool from './lib/postgres'

@Injectable()
export class AppService {
  async getColor(request: { color: string }): Promise<string> {
    const color = request.color.toLocaleLowerCase()

    const { rows } = await pool.query('SELECT * FROM colors WHERE color = $1', [color])

    if (rows.length > 0) {
      return rows[0].color
    } else {
      return 'No color found'
    }
  }
}
