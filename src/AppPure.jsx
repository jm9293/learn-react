import './App.css';

import PullUpPure from './components/PullUpPure.jsx';

export default function AppPure() {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  );
}
