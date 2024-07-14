const Button = props => {
  //  Write your code here.
  const {className, button} = props
  return <button className={`button ${className}`}>{button}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='button-container'>
        <Button button='Like' className='like-button' />
        <Button button='Comment' className='Comment-button' />
        <Button button='Share' className='Share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
