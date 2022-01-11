import DiceGame from './pages/DiceGame'
import { Text } from "react-native";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Welcome = () => {
  return (<Text>Welcome</Text>)
}

export default function App() {
  return (
    //라우터 기능 추가
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/diceGame" element={<DiceGame />}/>
        <Route path="/diceGame/:userId/:roomId" element={<DiceGame />}/>
      </Routes>
    </BrowserRouter>
  );
}
