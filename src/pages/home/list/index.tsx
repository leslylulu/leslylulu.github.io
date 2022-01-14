import { Link } from "react-router-dom";

const ArticleList = () => {

  const list = [
    { id: 1, name: '2021年度总结', url: '/home/anan' },
    { id: 1, name: 'test', url: '/home/test' },
  ]

  return (
    <div className='list'>
      <span>👀</span>
      <span style={{ marginLeft: 20 }}>2022</span>
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

export default ArticleList;