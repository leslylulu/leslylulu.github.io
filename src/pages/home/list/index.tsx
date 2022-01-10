import { Link } from "react-router-dom";

const MenuList = () => {

  const list = [
    {id: 1, name: '2021年度总结', url: '/home/annualsummary' },
  ]

  return (
    <div className='list'>
      {
        list.map((item, index) => {
          return (
            <div key={index} className='home-list-item'>
              <Link to={item.url}>
                <span>{item.name}</span>
              </Link>
            </div>
          )
        })
      }
    </div>
  )

}

export default MenuList;