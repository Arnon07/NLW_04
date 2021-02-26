import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Arnon07.png" alt="Arnon Nunes"/>
            <div>
                <strong>Arnon Nunes</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}