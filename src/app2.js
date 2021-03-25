import './App2.css';


function App() {
    let fistName ='amir'
    let lastName ='by'
    return(
        <div>
            <img src='/profil.png'className='my-profile' alt='amirby' />
            <img src={'./profil.png'}className={'my-profile'} alt={'amirby'} />

            <img src={variable}/>

            <p>{fistName}{lastName}</p>

         </div>


    );
}

