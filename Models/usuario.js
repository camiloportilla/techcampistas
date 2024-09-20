import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        nomuser: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        emailVerified: {
            type: Boolean,
            default: false,
            }
    },
    {
        timestamps: true,
        versionKey: false,
   }
);

export const usuario = mongoose.model('user',userSchema);
export default usuario;