Mock.mock("http://192.168.2.49:8080/book/getAll",{
    'list|5': [{
      'id|+1': 1,
      'name': '@cname',
      'author':'@string',
      'price': '@float(2)',
      'publish_house': '@cword(5)'
    }]
  }) 