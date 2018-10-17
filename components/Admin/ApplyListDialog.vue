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
          <el-col :span="16">
            <el-form-item label="신청금액">
              <el-input disabled v-model="consulFormData.loanAmount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="상태">
              <el-select v-model="consulFormData.situation" placeholder="진행상태를 체크해주세요">
                <el-option label="미확인" value="미확인"></el-option>
                <el-option label="대기중" value="대기중"></el-option>
                <el-option label="진행중" value="진행중"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="담당/접수자">
              <el-col :span="11">
                <el-select v-model="consulFormData.manager_id" style="width:50%;">
                  <el-option v-for="staff in 3" :key="staff" :label="staff.name"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2" class="center">/</el-col>
              <el-col :span="11">
                <el-input v-model="consulFormData.receptionist"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="경로">
              <el-input v-model="consulFormData.route"></el-input>
            </el-form-item>
          </el-col>
          <!-- v-model rules 작업해야함 -->
          <el-col :span="24">
            <el-form-item label="접수등록">
              <el-col :span="11">
                <el-date-picker v-model="consulFormData.enrollment_date" type="date" placeholder="월,일을 설정해주세요" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="center" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker v-model="consulFormData.enrollment_time" value-format="HH:mm:ss" type="fixed-time" placeholder="시간을 설정해주세요" style="width:100%;"></el-time-picker>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="예약표시">
              <el-col :span="11">
                <el-date-picker v-model="consulFormData.reserve_date" type="date" placeholder="월,일을 설정해주세요" style="width:100%;"></el-date-picker>
              </el-col>
              <el-col class="center" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker v-model="consulFormData.reserve_time" value-format="HH:mm:ss" type="fixed-time" placeholder="시간을 설정해주세요" style="width:100%;"></el-time-picker>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item v-model="consulFormData.reserve_contents" label="내용">
              <el-input></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="이름">
              <el-input v-model="consulFormData.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="휴대폰번호">
              <el-input v-model="consulFormData.tel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="warning" size="mini" style="width: 100%;">중복확인</el-button>
          </el-col>
          <el-col :span="8">
            <el-form-item label="생년월일">
              <el-input v-model="consulFormData.birth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="명의/통신사">
              <el-select v-model="consulFormData.owner" placeholder="명의를 확인해주세요" style="width:50%;">
                <el-option label="본인" value="본인"></el-option>
                <el-option label="직계가족" value="직계가족"></el-option>
                <el-option label="지인" value="지인"></el-option>
              </el-select>
              <el-select v-model="consulFormData.agency" placeholder="통신사를 선택해주세요" style="width:50%;">
                <el-option label="SKT" value="SKT"></el-option>
                <el-option label="LGT" value="LGT"></el-option>
                <el-option label="KT" value="KT"></el-option>
                <el-option label="기타" value="기타"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="직군">
              <el-select v-model="consulFormData.agency" placeholder="직업군을 선택해주세요">
                <el-option label="직장인" value="직장인"></el-option>
                <el-option label="자영업자" value="자영업자"></el-option>
                <el-option label="무직" value="무직"></el-option>
                <el-option label="기타" value="기타"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item v-model="consulFormData.jobTitle" label="직장명">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" v-model="consulFormData.period">
              <el-form-item label="재직기간">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-form-item v-model="consulFormData.about" label="재직정보">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item v-model="consulFormData.income" label="소득정보">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="4대가입유무" style="height:29px">
              <el-radio-group v-model="consulFormData.insurance">
                <el-radio :label="true">유</el-radio>
                <el-radio :label="false">무</el-radio>
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
              <el-input v-model="consulFormData.grade"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="결혼유무">
              <el-radio-group v-model="consulFormData.marry" style="height:29px">
                <el-radio :label="true">유</el-radio>
                <el-radio :label="false">무</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="연체이력">
              <el-input v-model="consulFormData.overdue"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-col :span="12">
              <el-form-item label="재산사항">
                <el-input v-model="consulFormData.propertyB"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="재산여부" style="height:29px">
                <el-radio-group v-model="consulFormData.propertyA">
                  <el-radio :label="true">유</el-radio>
                  <el-radio :label="false">무</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-form-item label="문의내용">
              <el-input v-model="consulFormData.note" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="1차상담">
              <el-input v-model="consulFormData.coment"></el-input>
            </el-form-item>
          </el-col>
          <el-col style="text-align:right;">
            <el-button type="danger" @click="dialog.updateConsul= false">목록으로</el-button>
            <el-button type="primary" native-type="submit">수정완료</el-button>
          </el-col>
          <el-col>
            <el-input v-model="consulFormData.coment" style="margin-top:20px;margin-bottom:20px;" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" disabled placeholder="상담내용"></el-input>
          </el-col>
          <el-table :data="record" size="mini" style="width:100%;">
            <el-table-column>
              <el-table-column prop="time" label="시간" width="150px"></el-table-column>
              <el-table-column prop="name" label="이름" width="60px"></el-table-column>
              <el-table-column prop="note" label="내용" width="550px"></el-table-column>
            </el-table-column>
          </el-table>
          <el-col>
            <el-form-item label-width="0">
              <el-input style="resize:none;" type="textarea" :autosize="{ minRows: 1, maxRows: 1}" placeholder="내용을 입력해주세요">
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

  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      route: "웹",
      selected: "",
      memo: [{ time: "2016-03-21 10:30:23", name: "최태근", note: "없음" }],
      staff: [{ name: "하이" }, { name: "하삼" }, { name: "하사" }],
      consul: [],
      record: [],
      createUserData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "",
        manager_id: ""
      },
      consulFormData: {
        id: "",
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
        income: 0,
        insurance: false,
        overdue: 0,
        propertyA: false,
        propertyB: "",
        manager_id: "",
        receptionist: "",
        enrollment_date: "2018-09-28",
        enrollment_time: "13:00:00",
        reserve_date: "2018-09-28",
        reserve_time: "13:00:00",
        reserve_contents: "",
        owner: "",
        agency: "",
        period: "",
        marry: false,
        grade: "",
        coment: "",
        memo: ""
      }
    };
  },
  props: {
    dialog: {
      type: Object,
      required: true
    }
  },
  methods: {
    open(consul) {
      this.consulFormData = consul;

      this.dialog.updateConsul = true;
    },
    async createUser() {
      const res = await axios.post("/api/consultation", {
        data: this.createUserData
      });

      this.dialog.createCustomer = false;

      this.$store.commit("addApply", res.data);
    },
    async consulForm() {
      const res = await axios.post(
        `/api/consultation/${this.consulFormData.id}`,
        {
          data: this.consulFormData
        }
      );

      this.consulFormDialog = false;

      console.log(res);
    }
  },
  async mounted() {
    const res = await axios.get("/api/consultation/consulReport", {});
    this.record = res.data;
  }
};
</script>
<style lang="scss" scoped>
.el-form {
  & /deep/ .el-textarea__inner {
    resize: none;
  }
}
</style>