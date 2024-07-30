import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";
import { LeagueEnum } from "../enums/league.enum";

@Entity('leagues')
export class League extends BaseEntity {

    @Column({ 
        type: 'varchar', 
        length: 255,
        nullable: false 
    })
    name: string;

    @Column({ 
        type: 'text',
        nullable: true
    })
    description: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    session: string;
    
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    country: string;

    @Column({
        type: 'int',
        nullable: false 
    })
    type: string;

}
