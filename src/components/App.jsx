import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
function App() {
  return (
    <div>
      <Header />
      <Note title="Note 1" content="This is the first note" />
      <Note title="Note 2" content="This is the 2nd note" />
      <Note title="Note 3" content="This is the 3rd note" />
      <Footer />
    </div>
  );
}

export default App;