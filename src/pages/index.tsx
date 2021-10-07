import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/UserInformation/UserInformation';


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
      title={'Conheça os profissionais'}
      subtitle={'Preencha seu endereço e conheça os profissionais da sua localidade'}
      />

      <UserInformation 
        picture={''} 
        name={''} 
        rating={0}
        description={''} />
        
    </div>
  )
}

export default Home
