import Header from '@/app/components/Header/Header';
import Main from '@/app/components/Main/Main';
import backgroundImage from '@/public/background-view.jpeg';
import Image from 'next/image';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          className="backgroundImage"
          height={815}
        />
      </div>
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

