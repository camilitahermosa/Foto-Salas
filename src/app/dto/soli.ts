import {IsNotEmpty, IsInt, IsDate, IsBoolean} from "class-validator";

export class Soli {

    @IsDate({message: 'Fecha no valida'})
    date: Date;

    @IsNotEmpty({message: 'Campo requerido'})
    name: string;

    @IsNotEmpty({message: 'Campo requerido'})
    lab: string;

    @IsNotEmpty({message: 'Campo requerido'})
    asign: string;

    @IsNotEmpty({message: 'Campo requerido'})
    teacher: string;

    @IsNotEmpty({message: 'Campo requerido'})
    faculty: string;

    @IsInt({message: 'Campo requerido'})
    students: number;

    @IsInt({message: 'Campo requerido'})
    cantMachines: number;

    @IsInt({message: 'Campo requerido'})
    cantConsume: number;

    @IsNotEmpty({message: 'Campo requerido'})
    observation: string;

    @IsBoolean({message: 'Seleccione una opcion'})
    useMachines: boolean;

    @IsBoolean({message: 'Seleccione una opcion'})
    useConsume: boolean;

    @IsBoolean({message: 'Seleccione una opcion'})
    guide: boolean;
}
