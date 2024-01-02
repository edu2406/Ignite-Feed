import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';



export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="edu"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae tenetur consectetur! Explicabo dolores vel alias ad, accusamus dolorem voluptates nobis tenetur, ipsa necessitatibus sit nulla, velit hic. Tenetur, adipisci."
          />
          <Post
            author="Carlos"
            content="Um novo post muito legal"
          />
          
        </main>
      </div>
    </div>

  )
}

