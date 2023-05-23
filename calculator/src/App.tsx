import styles from './App.module.css'
import React, { useState } from 'react'
import Logo from './assets/powered.png'
import { GridItem } from './components/GridItem/index'

import { levels, calculateIMC } from './helpers/imc'

function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert('Preencha os campos com sua altura e seu peso')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={Logo} alt="logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.8 (Em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder='Digite a seu peso. Ex: 60.5 (Em quilosgramas)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button
            onClick={handleCalculateButton}>
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
