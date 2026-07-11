import style from './about.module.css';

const About = () => {
    return(
        <div className={style.aboutContainer}>
            <h1 className={style.label}>Exploring the Multiverse Through Code</h1>
            
            <p>Welcome to my personal laboratory! This application was built using React for the interface, Redux for state management (because Rick's memory is a chaotic mess!), and a custom API to fetch characters from every dimension. My goal here was to combine my passion for frontend development with the irreverent humor of the series. Can you find your favorite version of Rick before the portal closes?</p>
            
            <p>This project allowed me to push my boundaries in managing complex states, handling API requests, and implementing dynamic routing. Rick and Morty isn't just a show; it's a data-rich ecosystem that perfectly tested my React skills. I am constantly striving to optimize my code and enhance user-centric interface design.</p>
            
            {/* Botón de GitHub */}
            <a 
                href="https://github.com/Maggodoy" 
                target="_blank" 
                rel="noreferrer" 
                className={style.githubButton}
            >
                View my work on GitHub
            </a>
        </div>
    )
}
 
export default About;