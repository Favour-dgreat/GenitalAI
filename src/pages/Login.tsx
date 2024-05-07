import Wrapper from '../layout/Wrapper';
import SEO from '../components/SEO';
import LoginMain from '../components/login';

const Login = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Login GenitalAI'} />
         <LoginMain />
      </Wrapper>
   );
};

export default Login;