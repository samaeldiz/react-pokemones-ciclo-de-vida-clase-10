
import { useEffect, useState } from 'react';
import { getPokemonesByType, getRandomPokemon} from '../data/pokemones';
import styles from '../styles/container.module.css';
import Pokemon from './Pokemon';

const pokemonPortada = getRandomPokemon();

const ContainerFuncion2 = ({title}) =>{

    const [portada, setPortada] = useState(pokemonPortada.avatar)
    const [name, setName] = useState(pokemonPortada.name)
    const [pokemones, setPokemones] = useState([])
    const [type, setType] = useState('rock')

    useEffect( () => {
        setPokemones(getPokemonesByType(type))
    }, [type])

    const cambiarPortada = (name, image) => {
        setPortada(image)
        setName(name)
      }

    const  cambiarTipo = () => {
        setType('fire')
      }

      const  cambiarTipo2 = () => {
        setType('water')
      }

      const  cambiarTipo3 = () => {
        setType('rock')
      }

    
      return (
        <>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.portada} src={portada} alt="imagen principal" />
        <h4 className={styles.subtitle}>
            Un <span className={styles.wild}>{name}</span> salvaje a aparecido
        </h4>
        <div className={styles.buttonbar}>
        <button onClick={cambiarTipo} >Cambiar a Fuego</button>
        <button onClick={cambiarTipo2} >Cambiar a water</button>
        <button onClick={cambiarTipo3} >Cambiar a rock</button>
        </div>
        <div className={styles.container}>
          {
            pokemones.map((pokemon) => <Pokemon  key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} actualizar={cambiarPortada} />)
          }
        </div>
      </>


      )




}

export default ContainerFuncion2;