
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';
        
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';               
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const{register, handleSubmit} = useForm();
    const{setlogado} = useContext(Context);
    const navigate = useNavigate();
    function logar(dados){
        if(dados.email == "dionisiopsn@gmail.com" && dados.senha == "123456")
            setlogado(true);
            navigate("/home");
        }
    return ( 
        <>
            <div className='bg-indigo-100 h-screen flex align-items-center justify-content-center px-3'>
                <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-0 p-3 border-round-md'>
                    <h3 className='text-center'>Seja bem-vindo</h3>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
                    <InputText
                        placeholder='Seu email'
                        id='email'
                        type='email'
                        className='mb-3 w-full'
                        {...register('email', {required: true})}
                    />
                    <label htmlFor="senha">Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon 
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                                />
                            <InputText 
                                id='senha'
                                type={ mostrarSenha ? 'text' : 'password'}
                                placeholder='********'
                                className=' w-full'
                                    {...register('senha', {required: true})}
                            />
                        </IconField>
                    </div>
                    <Button 
                        label="Entrar" 
                        type='submit'
                        className='w-full'
                        />
                </form>
            </div>

        </>
     );
}
 
export default Login;