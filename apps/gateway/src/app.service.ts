import { Injectable } from '@nestjs/common'

import pool from './lib/postgres'

@Injectable()
export class AppService {
  async getHello(request: { color: string }): Promise<string> {
    const color = request.color.toLocaleLowerCase()

    const { rows } = await pool.query('SELECT * FROM colors WHERE color = $1', [color])
    return rows[0].color
  }
}
