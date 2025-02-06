import styles from './App.module.css';
import Co_outer from './pages/outer/outer';
import Co_footer from './pages/footer/footer';


function App() {

  return (
    <div className={styles.main_App}>

      <Co_outer />
      <Co_footer />

    </div>
  )
}

export default App