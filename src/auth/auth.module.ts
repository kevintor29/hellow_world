import { Module } from "@nestjs/common";
import { Bcrypt } from "src/bcrypt/bsrypt";

@Module({
    imports:[],
    providers:[Bcrypt],
    controllers:[],
    exports:[Bcrypt]
})
export class AuthModule{}