import { JwtService } from '@nestjs/jwt/dist';
import {Injectable,ExecutionContext, CanActivate, UnauthorizedException} from '@nestjs/common'
import { Observable } from 'rxjs';


@Injectable()
export class  JwtAuthGuard implements CanActivate {
constructor(private readonly jwtService:JwtService) {}
canActivate(
    context: ExecutionContext,
): boolean | Promise<boolean> | Observable<boolean>{
    
    
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if(!authHeader){
        
        throw new UnauthorizedException({
            
            message: "Tokenni tekwiring"
        }); 
    }
    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];
    if(bearer !== 'Bearer' || !token){
        
        throw new UnauthorizedException({
            message: "Tokenni tekwiring"
        });
    }

    let user: any;
    try {
        console.log(token);
        
        user = this.jwtService.verify(token)
        // req.user = user
        console.log(user);        
    } catch (error) {
        console.log("GUARD>>>>>");
        throw new UnauthorizedException({
            message: error
        });
    }
    return true
}

}