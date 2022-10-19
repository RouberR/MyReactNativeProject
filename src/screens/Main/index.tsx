import MainView from './MainView';

const Main = (props: any) => {
  const handleNavigate = () => {
    props.navigation.navigate('AuthAnimated');
  };
  return <MainView handleNavigate={handleNavigate} />;
};

export default Main;
