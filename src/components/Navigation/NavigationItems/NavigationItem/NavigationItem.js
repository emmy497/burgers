import React from 'react'
import classes from "./NavigationItem.module.css"

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
        <a href={props.link}  
        className={props.active ? classes.acttive : null}>{props.children}</a>
    </li>
  )
}

export default NavigationItem
