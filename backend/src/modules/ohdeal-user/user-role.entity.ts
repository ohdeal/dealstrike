import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"

@Entity()
@Unique(["user_id"])
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: string              // fait le lien avec l'utilisateur Medusa

  @Column()
  role: string                 // "admin" ou "supplier"
}
