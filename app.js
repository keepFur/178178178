'use strict';
Vue.config.devtools = true;
/* no check */
new Vue({
  el: '#app',
  data: function() {
    // 校验注册的时候两次密码是否一致， 此处必须要使用箭头函数，不然的话，this不会指向当前的vue实例
    var confirmPasswordValidator = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    var tbKB = [
      {
        id: 0,
        type: 'lbkd',
        alias: '龙邦速递',
        name: '龙邦速递「淘宝、天猫专用」',
        price: {
          ptvip: 1.8,
          vip: 1.7,
          jpvip: 1.6
        }
      },
      {
        id: 1,
        type: 'bskd',
        alias: '百世快递',
        name: '百世快递「淘宝、天猫专用」',
        price: {
          ptvip: 2.2,
          vip: 2.1,
          jpvip: 2.0
        }
      },
      {
        id: 2,
        type: 'ytkd',
        alias: '圆通快递',
        name: '圆通快递「淘宝、天猫专用」',
        price: {
          ptvip: 1.6,
          vip: 1.5,
          jpvip: 1.4
        }
      }
    ];
    return {
      // 当前时间
      nowDate: new Date(),
      // 登录
      dialogLoginVisible: false,
      // 注册
      dialogRegisterVisible: false,
      // 关于
      dialogAboutVisible: false,
      // 帮助
      dialogHelpVisible: false,
      // 更多公共
      dialogMoreNoticeVisible: false,
      // 会员中心
      visibleVipCenter: true,
      // 添加发件人地址
      dialogAddAddressVisible: false,
      // 编辑发件人地址
      dialogEditAddressVisible: false,
      // 登录表单
      loginForm: {
        username: '',
        password: ''
      },
      // 注册表单
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      // 登录表单校验规则
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ]
      },
      // 注册表单校验规则
      registerFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          },
          {
            validator: confirmPasswordValidator
          }
        ]
      },
      // 淘宝的空包类型
      tbKBSelceted: 0,
      tbKB: tbKB,
      // 京东空包类型
      jdKBSelceted: 0,
      jdKB: [
        {
          id: 0,
          type: 'lbkd',
          alias: '龙邦速递',
          name: '龙邦速递「京东专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 1,
          type: 'stkd',
          alias: '申通快递',
          name: '申通快递「京东专用」',
          price: {
            ptvip: 1.6,
            vip: 1.5,
            jpvip: 1.4
          }
        }
      ],
      // 拼多多空包类型
      pddKBSelceted: 0,
      pddKB: [
        {
          id: 0,
          type: 'gtkd',
          alias: '国通快递',
          name: '国通快递「拼多多专用」',
          price: {
            ptvip: 1.0,
            vip: 0.9,
            jpvip: 0.8
          }
        },
        {
          id: 1,
          type: 'lbkd',
          alias: '龙邦速递',
          name: '龙邦速递「拼多多专用」',
          price: {
            ptvip: 1.1,
            vip: 1.0,
            jpvip: 0.9
          }
        },
        {
          id: 2,
          alias: '申通快递',
          type: 'stkd',
          name: '申通快递「拼多多专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 3,
          type: 'bskd',
          alias: '百世快递',
          name: '百世快递「拼多多专用」',
          price: {
            ptvip: 1.5,
            vip: 1.4,
            jpvip: 1.3
          }
        },
        {
          id: 4,
          type: 'yfkd',
          alias: '亚风快递',
          name: '亚风快递「拼多多专用」',
          price: {
            ptvip: 0.85,
            vip: 0.75,
            jpvip: 0.65
          }
        },
        {
          id: 5,
          type: 'kfwkd',
          alias: '快服务快递',
          name: '快服务快递「平多多专用」',
          price: {
            ptvip: 0.9,
            vip: 0.8,
            jpvip: 0.7
          }
        }
      ],
      // 圆通空包类型
      ytKBSelceted: 0,
      ytKB: [
        {
          id: 0,
          type: 'ytkd',
          alias: '圆通快递',
          name: '圆通快递「21点之前下单，2小时内揽件」',
          price: {
            ptvip: 0.9,
            vip: 0.8,
            jpvip: 0.7
          }
        }
      ],
      // excel空包类型
      excelKB: [
        {
          id: 0,
          type: 'lbkd',
          alias: '龙邦速递',
          name: '龙邦速递「淘宝、天猫专用」',
          price: {
            ptvip: 1.8,
            vip: 1.7,
            jpvip: 1.6
          }
        },
        {
          id: 1,
          type: 'bskd',
          alias: '百世快递',
          name: '百世快递「淘宝、天猫专用」',
          price: {
            ptvip: 2.2,
            vip: 2.1,
            jpvip: 2.0
          }
        },
        {
          id: 2,
          type: 'ytkd',
          alias: '圆通快递',
          name: '圆通快递「淘宝、天猫专用」',
          price: {
            ptvip: 1.6,
            vip: 1.5,
            jpvip: 1.4
          }
        },
        {
          id: 3,
          type: 'kjkd',
          alias: '快捷快递',
          name: '快捷速递「淘宝、天猫、阿里专用」',
          price: {
            ptvip: 1.76,
            vip: 1.66,
            jpvip: 1.56
          }
        },
        {
          id: 4,
          type: 'lbkd',
          alias: '龙邦速递',
          name: '龙邦速递「京东专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 5,
          type: 'stkd',
          alias: '申通快递',
          name: '申通快递「京东专用」',
          price: {
            ptvip: 1.6,
            vip: 1.5,
            jpvip: 1.4
          }
        },
        {
          id: 6,
          type: 'gtkd',
          alias: '国通快递',
          name: '国通快递「拼多多专用」',
          price: {
            ptvip: 1.0,
            vip: 0.9,
            jpvip: 0.8
          }
        },
        {
          id: 7,
          type: 'lbkd',
          alias: '龙邦速递',
          name: '龙邦速递「拼多多专用」',
          price: {
            ptvip: 1.1,
            vip: 1.0,
            jpvip: 0.9
          }
        },
        {
          id: 8,
          alias: '申通快递',
          type: 'stkd',
          name: '申通快递「拼多多专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 9,
          type: 'bskd',
          alias: '百世快递',
          name: '百世快递「拼多多专用」',
          price: {
            ptvip: 1.5,
            vip: 1.4,
            jpvip: 1.3
          }
        },
        {
          id: 10,
          type: 'yfkd',
          alias: '亚风快递',
          name: '亚风快递「拼多多专用」',
          price: {
            ptvip: 0.85,
            vip: 0.75,
            jpvip: 0.65
          }
        },
        {
          id: 11,
          type: 'kfwkd',
          alias: '快服务快递',
          name: '快服务快递「平多多专用」',
          price: {
            ptvip: 0.9,
            vip: 0.8,
            jpvip: 0.7
          }
        },
        {
          id: 12,
          type: 'ytkd',
          alias: '圆通快递',
          name: '圆通快递「全网电商平台通用」推荐',
          price: {
            ptvip: 0.9,
            vip: 0.8,
            jpvip: 0.7
          }
        }
      ],
      // 宝贝任务
      bbTaskSelected: 0,
      bbTask: [
        {
          id: 0,
          name: 'PC搜索流量',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 1,
          name: 'PC直访商品',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 2,
          name: 'APP搜索流量',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 3,
          name: 'APP收藏商品',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 4,
          name: 'APP搜索收藏',
          price: {
            ptvip: 0.36,
            vip: 0.35,
            jpvip: 0.34
          }
        },
        {
          id: 5,
          name: 'APP直接加购',
          price: {
            ptvip: 0.33,
            vip: 0.32,
            jpvip: 0.31
          }
        },
        {
          id: 6,
          name: 'APP搜索加购',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 7,
          name: '直播关注',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        },
        {
          id: 8,
          name: '微淘点赞',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        },
        {
          id: 9,
          name: '直播观看人数',
          price: {
            ptvip: 0.02,
            vip: 0.02,
            jpvip: 0.02
          }
        }
      ],
      // 店铺任务
      dpTaskSelected: 0,
      dpTask: [
        {
          id: 0,
          name: 'PC直访店铺',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 1,
          name: 'APP店铺收藏',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        }
      ],
      // 京东任务
      jdTaskSelected: 0,
      jdTask: [
        {
          id: 0,
          name: '京东流量',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 1,
          name: '京东商品收藏',
          price: {
            ptvip: 0.3,
            vip: 0.29,
            jpvip: 0.28
          }
        },
        {
          id: 2,
          name: '京东店铺关注',
          price: {
            ptvip: 0.16,
            vip: 0.15,
            jpvip: 0.14
          }
        },
        {
          id: 3,
          name: '京东加购',
          price: {
            ptvip: 0.31,
            vip: 0.3,
            jpvip: 0.29
          }
        }
      ],
      activeNames: '1',
      // 下单中心的数据，空包的
      kbBuyForm: {
        kdType: 0,
        toAddress: '',
        packageWeight: 1.0,
        toUserInfo: ''
      },
      kdTypeKB: tbKB,
      plantform: '淘宝、天猫、阿里',
      // 当前模块是否是空包下单模块
      isKBBuy: true,
      kbBuyFormRules: {
        packageWeight: [
          {
            required: true,
            message: '包裹重量不能为空'
          },
          {
            type: 'number',
            message: '包裹重量只能是数字'
          }
        ],
        toUserInfo: [
          {
            required: true,
            message: '收件人信息不能为空'
          }
        ],
        kdType: [
          {
            required: true,
            message: '快递类型不能为空'
          }
        ],
        toAddress: [
          {
            required: true,
            message: '发货地址不能为空'
          }
        ]
      },
      // 收件人地址信息
      addressData: [
        {
          index: 0,
          fromName: '王小虎',
          fromPhone: '17770534313',
          fromAddress: ['江苏省', '南京市', '江陵区'],
          fromDetailAddress: '金沙江路 1518 弄'
        },
        {
          index: 1,
          fromName: '白小虎',
          fromPhone: '17770534313',
          fromAddress: ['浙江省', '杭州市', '西湖区'],
          fromDetailAddress: '金沙江路 1518 弄'
        }
      ],
      // 添加地址表单
      addAddressForm: {
        fromName: '',
        fromAddress: [],
        fromPhone: '',
        fromDetailAddress: ''
      },
      // 编辑收件人信息
      editAddressForm: {
        index: 0,
        fromName: '',
        fromAddress: [],
        fromPhone: '',
        fromDetailAddress: ''
      },
      // 添加地址表单验证规则
      addAddressFormRules: {
        fromName: [
          {
            required: true,
            message: '请填写发件人名字'
          }
        ],
        fromAddress: [
          {
            required: true,
            message: '请选择发件地址'
          }
        ],
        fromPhone: [
          {
            required: true,
            message: '请填写发件人电话'
          }
        ]
      },
      // 省份信息
      fromAddressInfo: [
        {
          value: '江苏省',
          label: '江苏省',
          children: [
            {
              value: '南京市',
              label: '南京市',
              children: [
                {
                  value: '江陵区',
                  label: '江陵区'
                }
              ]
            }
          ]
        },
        {
          value: '浙江省',
          label: '浙江省',
          children: [
            {
              value: '杭州市',
              label: '杭州市',
              children: [
                {
                  value: '西湖区',
                  label: '西湖区'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    // 用户登录
    userLoginHandler: function() {
      this.dialogLoginVisible = true;
    },
    // 用户注册
    userRegisterHandler: function() {
      this.dialogRegisterVisible = true;
    },
    // 关于站点
    aboutSiteHandler: function() {
      this.dialogAboutVisible = true;
    },
    // 帮助
    helpHandler: function() {
      this.dialogHelpVisible = true;
    },
    // 保存到桌面
    saveDeskHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    },
    // 更多公告
    moreNoticeHandler: function() {
      this.dialogMoreNoticeVisible = true;
    },
    // 查看平台运营报告
    viewOperationReportHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    },
    // 立即下单
    buyHandler: function() {
      this.$message({
        message: '下单成功',
        type: 'success'
      });
    },
    // 会员中心
    vipCenterHandler: function() {
      this.visibleVipCenter = true;
    },
    // 确认登录
    confirmLoginHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.dialogLoginVisible = false;
        } else {
          return false;
        }
      });
    },
    // 确认注册
    confirmRegisterHandler: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          this.dialogRegisterVisible = false;
        } else {
          return false;
        }
      });
    },
    // 立即下单
    onSubmitHandler: function() {
      this.$message({
        message: '购买成功',
        type: 'success'
      });
    },
    // 菜单change事件
    menuSelectHandler: function(index, indexPath) {
      if (index !== 'manageAddress' && index !== 'orderRecored') {
        this.kdTypeKB = this[index];
        this.isKBBuy = true;
      }
      switch (index) {
        case 'tbKB':
          this.plantform = '淘宝、天猫、阿里';
          break;
        case 'jdKB':
          this.plantform = '京东';
          break;
        case 'pddKB':
          this.plantform = '拼多多';
          break;
        case 'ytKB':
          this.plantform = '圆通-韵达';
          break;
        case 'manageAddress':
          this.isKBBuy = false;
          break;
        case 'orderRecored':
          this.isKBBuy = false;
          break;
        default:
          this.plantform = '淘宝、天猫、阿里';
          break;
      }
    },
    // 编辑发件人地址
    editAddreassHandler: function(row) {
      this.dialogEditAddressVisible = true;
      this.editAddressForm = row;
    },
    // 确认编辑
    confirmAddFromEditressHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.dialogEditAddressVisible = false;
          this.addressData[this.editAddressForm.index] = this.editAddressForm;
        } else {
          return;
        }
      });
    },
    // 删除发件人地址
    deleteAddressHandler: function(row) {
      this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.addressData.splice(row.index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    // 添加发件人地址
    addAddressHandler: function() {
      this.dialogAddAddressVisible = true;
    },
    // 确认添加
    confirmAddFromAddressHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.dialogAddAddressVisible = false;
          this.addressData.push(this.addAddressForm);
        } else {
          return false;
        }
      });
    }
  }
});
