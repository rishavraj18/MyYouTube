import React from 'react'
import Button from './Button'

//Create a list and loop it 
const ButtonsList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Scene"/>
      <Button name="News"/>
      <Button name="Comedy"/>
      <Button name="Music"/>
      <Button name="Gaming"/>
      <Button name="AI"/>
      <Button name="Live"/>
      <Button name="Stocks"/>
      <Button name="Android"/>
      <Button name="Gadgets"/>
      <Button name="Cricket"/>
      <Button name="Filmi"/>
      <Button name="Drifting"/>
      <Button name="Playlists"/>
    </div>
  )
}

export default ButtonsList