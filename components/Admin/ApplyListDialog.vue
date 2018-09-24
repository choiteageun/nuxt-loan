<template>
  <div>
    <!-- 고객 상세정보창 dialog -->
    <el-form :data="consul" label-width="90px" @submit.native.prevent="consulForm" size="mini">
      <el-dialog title="고객 정보" :visible.sync="dialog.updateConsul" width="800px" class="consul-form-dialog">
        <!-- <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row> -->
        <el-row>
          <el-col :span="24">
            <el-form-item label="신청금액" label-width="70%">
              <el-input disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="상태">
              <template slot-scope="scope">
                <el-select v-model="consulFormData.situation" placeholder="진행상태를 체크해주세요">
                  <el-option label="미확인" value="미확인"></el-option>
                  <el-option label="대기중" value="대기중"></el-option>
                  <el-option label="진행중" value="진행중"></el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label-width="120px" label="담당직원/접수자">
              <el-col :span="11">
                <el-input v-model="consulFormData.manager" prop="manager"></el-input>
              </el-col>
              <el-col :span="2" class="center">/</el-col>
              <el-col :span="11">
                <el-input v-model="consulFormData.receptionist"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="50px" label="경로">
              <el-input v-model="consulFormData.route"></el-input>
            </el-form-item>
          </el-col>
          <!-- v-model rules 작업해야함 -->
          <el-col :span="16">
            <el-form-item label="접수등록" label-width="120px">
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="월,일을 설정해주세요" style="width: 100%;" disabled="false"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="center" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="prop2">
                  <el-time-picker type="fixed-time" placeholder="시간을 설정해주세요" style="width:100%;" disabled="false"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="예약표시" label-width="70px">
              <el-col :span="6">
                <el-form-item prop="reservation1">
                  <el-date-picker type="date" placeholder="월,일을 설정해주세요" style="width:100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="center" :span="1">-</el-col>
              <el-col :span="6">
                <el-form-item prop="reservation2">
                  <el-time-picker type="fixed-time" placeholder="시간을 설정해주세요" style="width:100%;"></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :span="1">내용</el-col>
              <el-col :span="10">
                <el-input></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="이름" label-width="50px">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="휴대폰번호" label-width="120px">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="0px">
              <el-button type="warning">중복확인</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="생년월일" label-width="80px">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item label="명의/통신사" label-width="120px">
                <template slot-scope="scope">
                  <el-select v-model="consulFormData.owner" placeholder="명의를 확인해주세요">
                    <el-option label="본인" value="본인"></el-option>
                    <el-option label="직계가족" value="직계가족"></el-option>
                    <el-option label="지인" value="지인"></el-option>
                  </el-select>
                </template>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label-width="0px">
                <template slot-scope="scope">
                  <el-select v-model="consulFormData.agency" placeholder="통신사를 선택해주세요">
                    <el-option label="SKT" value="SKT"></el-option>
                    <el-option label="LGT" value="LGT"></el-option>
                    <el-option label="KT" value="KT"></el-option>
                    <el-option label="기타" value="기타"></el-option>
                  </el-select>
                </template>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-form-item label="직군" label-width="80px">
              <template slot-scope="scope">
                <el-select v-model="consulFormData.agency" placeholder="직업군을 선택해주세요">
                  <el-option label="직장인" value="직장인"></el-option>
                  <el-option label="자영업자" value="자영업자"></el-option>
                  <el-option label="무직" value="무직"></el-option>
                  <el-option label="기타" value="기타"></el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item label="직장명">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="재직기간">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-form-item label="재직정보">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="소득정보">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="4대가입유무" label-width="130px">
              <el-radio-group v-model="consulFormData.insurance">
                <el-radio label="유"></el-radio>
                <el-radio label="무"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="햇살론">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="신용등급">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="결혼유/무" label-width="130px">
              <el-radio-group v-model="consulFormData.marry">
                <el-radio label="유"></el-radio>
                <el-radio label="무"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="연체이력">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item label="재산사항">
                <el-input v-model="consulFormData.propertyB"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="재산여부" label-width="130px">
                <el-radio-group v-model="consulFormData.propertyA">
                  <el-radio label="유"></el-radio>
                  <el-radio label="무"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col style="text-align:right;">
            <el-button type="danger" @click="dialog.updateConsul= false">목록으로</el-button>
            <el-button type="primary" native-type="submit">수정완료</el-button>
          </el-col>
          <el-col>
            <el-input style="margin-top:20px;margin-bottom:20px;" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" disabled="true" placeholder="상담내용"></el-input>
          </el-col>
          <el-table :data="memo" size="mini" style="width:100%;">
            <el-table-column>
              <el-table-column prop="time" label="시간" width="150px"></el-table-column>
              <el-table-column prop="name" label="이름" width="60px"></el-table-column>
              <el-table-column prop="note" label="내용" width="550px"></el-table-column>
            </el-table-column>
          </el-table>
          <el-col>
            <el-form-item label-width="0">
              <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 1}" placeholder="내용을 입력해주세요">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col style="text-align:right;">
            <el-button type="primary" native-type="submit">보고하기</el-button>
          </el-col>
        </el-row>
      </el-dialog>
    </el-form>

    <el-form label-width="80px" @submit.native.prevent="createUser">
      <el-dialog title="고객 생성" :visible.sync="dialog.createCustomer" width="400px" class="create-user-dialog">
        <el-form-item label="고객명">
          <el-input v-model="createUserData.name"></el-input>
        </el-form-item>
        <el-form-item label="연락처">
          <el-input v-model="createUserData.tel"></el-input>
        </el-form-item>
        <el-form-item label="신청금액">
          <el-input v-model="createUserData.loanAmount"></el-input>
        </el-form-item>
        <el-form-item label="경로">
          <el-input v-model="createUserData.route"></el-input>
        </el-form-item>
        <div slot="footer">
          <el-button @click="dialog.createCustomer = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>

    <el-form label-width="90px" @submit.native.prevent="createStaff">
      <el-dialog title="직원 등록" :visible.sync="dialog.createStaff" width="400px" class="create-staff-dialog">
        <el-form-item label="이름">
          <el-input v-model="createStaffData.name"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호등록">
          <el-input type="password" v-model="createStaffData.password"></el-input>
        </el-form-item>
        <el-form-item label="연락처">
          <el-input v-model="createStaffData.tel"></el-input>
        </el-form-item>
        <el-form-item label="나이">
          <el-input v-model="createStaffData.age"></el-input>
        </el-form-item>
        <div slot="footer">
          <el-button @click="dialog.createStaff = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      route:"웹",
      selected: "",
      memo:[{time:"2016-03-21 10:30:23", name:"최태근", note:"없음"}],
      staff: [],
      consul: [],
      createStaffData: {
        name: "",
        tel: "",
        age: "",
        password: ""
      },
      createUserData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "",
        manager: ""
      },
      consulFormData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "",
        situation: "",
        route: "",
        birth: "",
        jobTitle: "",
        jobGroup: "",
        about: "",
        income: "",
        insurance: "",
        overdue: "",
        propertyA: "",
        propertyB: "",
        manager: "",
        receptionist: "",
        enrollment: "",
        owner: "",
        agency: "",
        period: "",
        marry: "",
        grade: "",
        note: ""
      },
    };
  },
  props:{
    dialog:{
      type:Object,
      required:true
    },
    applyList:{
      type: Array,
      required:true
    },
  },
  methods: {
    async createUser() {
      //이벤트 실행
      console.log("B")
      this.$emit("createConsul", this.createUserData)
    },
    async createStaff() {
      const res = await axios.post("/api/createStaff", {
        data: this.createStaffData
      });

      this.createStaffDialog = false;

      this.applyList.push(res.data);
    },
    async consulForm() {
      const res = await axios.post("/api/consulForm", {
        data: this.consulFormData
      });

      this.consulFormDialog = false;

      this.applyList.push(res.data);
      console.log(consul);
    }
  },
};
</script>
<style lang="scss" scoped>
</style>