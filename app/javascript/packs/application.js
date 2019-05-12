import React from 'react'
import { render } from 'react-dom'

import AppRouter from '../react/components/AppRouter'
import RedBox from 'redbox-react'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<AppRouter />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<AppRouter />, reactElement)
    }
  }
})
