import 'scss/app.scss'
import utils from 'js/utils'

const asyncFn = () =>  new Promise((resolve) => {
    setTimeout(resolve, 3000)        
})

const init = async () => {
    console.log('this is main js')
    await asyncFn()
    jQuery()
    utils.log('utils used')
}

init()