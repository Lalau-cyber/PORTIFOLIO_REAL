import {useState} from 'react-icons/fa'
import { FaLinkedin, FaGitHub, FaEnvelope } from 'react-icons/fa'

export default function Contato(){

    //pegar dados do formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    //feedbacks
    const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

    function handleSubmit(e)  {
        e.preventDefault(); // Impede o recarregamento da página
        setErro('');
        setSucesso('');

        if(nome.trim() ==''){
            setErro("Por favor, informe um nome")
            return;
        }

        if(email,trim() ==''){
            setErro("Por favor, informe um email")
            return;
        }
        if(!email.includes('@') || !email.includes('.')){
            setErro("Por favor, informe um email valido")
            return;
        }

        if(assunto.trim() == ''){
            setErro("Por favor, insira o assunto da mensagem")
            return;
        }
        if(mensagem.trim() ==''){
            setErro("A mensagem não pode ser vazia")
            return;
        }
        setSucesso(`Obrigada ${nome}! Sua mensagm sobre "${assunto}" foi enviada com sucesso`)
    }
    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
  

}