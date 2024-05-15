const Box = props => {
  //  Write your code here.
  const {className, box} = props
  return <div className='{`$className`}'>{box}</div>
}

const element = (
  //  Write your code here.
  <div class='main-container'>
    <h1>Boxes</h1>
    <Box className='small' box='Small' />
    <Box className='medium' box='Medium' />
    <Box className='big' box='Big' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
