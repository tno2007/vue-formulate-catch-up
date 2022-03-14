<!--

The benefit of this vf way...

- cleaner, leaner vue reactivedepe



-->

<script setup lang="ts">
import { reactive } from "@vue/composition-api";

import json from "./data/model.json";

import collections from "./data/collections";

import { filter, filters } from "./common/utility";

const makeRequestModel = (data: any) => {
  var requestModel = {} as any;
  Object.keys(data).forEach((key) => {
    //console.log(k, v);

    //var value = Object.values(key); // not this one to get data

    //console.log("value", value);

    //data[key]

    //console.log(key, data[key]);

    var value = data[key];

    //console.log("v", value);

    var keyData = {};

    //console.log("key", key);

    if (objectKeys.indexOf(key) >= 0) {
      //console.log("match");

      // destructure
      let [object] = value; // data.Explore;
      requestModel[key] = object;

      //keyData =
      //requestModel[key] = value;
    } else {
      //keyData = data[key];
      //keyData = Object.values(key);
      //keyData = value;
      //console.log("keyData", keyData);
      //requestModel[key] = value;
      requestModel[key] = value;
    }

    //var value = data[key];
    //requestModel[key] = keyData;

    //console.log(key, value);
  });
  return requestModel;
};

const makeFormModel = (obj: any) => {
  //const obj = JSON.parse(json);

  //console.log("obj", obj);

  var responseModel = {} as any;
  Object.keys(obj).forEach((key) => {
    var value = obj[key];
    var keyData = {};
    if (objectKeys.indexOf(key) >= 0) {
      //let [object] = value; // data.Explore;
      responseModel[key] = [value];
      //var c = 1;
    } else {
      responseModel[key] = value;
    }
  });
  return responseModel;
};

var objectKeys = ["Explore", "PrimaryApplicant"];

console.log(makeFormModel(json));

const submitHandler = async (data: any /* b: any*/) => {
  //await this.$axios.post("/my/api", data);
  //alert(`Thank you, ${data.name}`);

  var requestModel = makeRequestModel(data);
  //console.log("requestModel", requestModel);

  var d = filter(requestModel, filters.personalDetails);
  console.log("d", d);

  var e = filter(requestModel, filters.contactDetails);
  console.log("e", e);
};

const data = reactive({
  formModel: makeFormModel(json),
});
</script>

<template>
  <div id="app">
    <FormulateForm v-model="data.formModel" @submit="submitHandler">
      <FormulateInput type="group" name="Explore">
        <FormulateInput type="checkbox" name="Adopted" label="Adopted" />
        <FormulateInput
          type="text"
          name="Experience"
          label="Please enter your name"
          validation="required"
        />
      </FormulateInput>
      <FormulateInput type="group" name="PrimaryApplicant">
        <FormulateInput
          type="text"
          name="FirstName"
          label="Please enter your name"
          validation="required"
        />
        <FormulateInput
          type="group"
          name="AdditionalPassports"
          :repeatable="true"
          #default="{ index }"
        >
          <p>This is Group # {{ index }}</p>
          <FormulateInput
            type="select"
            name="PassportCountry"
            label="Passport country"
            :options="collections.Countries"
          />
        </FormulateInput>
      </FormulateInput>
      <FormulateInput type="submit" label="Save account" />
    </FormulateForm>
    <pre>{{ data.formModel }}</pre>
  </div>
</template>

<style lang="scss">
@import "@braid/vue-formulate/themes/snow/snow.scss";
</style>
