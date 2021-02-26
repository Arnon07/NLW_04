import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from './../componentes/Profile';
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from "../componentes/CompletedChallenges";
import { Countdown } from "../componentes/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />     

      <section>
        <div>
          <Profile/>
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
