Mock.mock("http://192.168.2.49:8080/user/getAll",{
    'list|5': [{
      'id|+1': 1,
      'name': '@cname',
      'phone|11': '1',
      'address': '@county(1)',
      'images': '@images'
    }]
  }) 