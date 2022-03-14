import { pick, omit } from "filter-anything";

export const filters = {
  personalDetails: {
    root: [
      "Explore.Id",

      "Explore.HaveChildren",
      "Explore.HavePartner",
      "PrimaryApplicant.Id",
      "PrimaryApplicant.DateOfBirth",
      "PrimaryApplicant.FirstName",
      "PrimaryApplicant.LastName",
      "PrimaryApplicant.Gender",
      "PrimaryApplicant.MaritalStatus",
      "PrimaryApplicant.PreferredTitle",

      "Partner.Id",
      "Partner.DateOfBirth",
      "Partner.DateOfMarriage",
      "Partner.DependentType",
      "Partner.FirstName",
      "Partner.Gender",
      "Partner.LastName",
      "Partner.MaritalStatus",
      "Partner.PreferredTitle",
    ],
    dependents: [
      "Id",
      "DateOfBirth",
      "DependentType",
      "FirstName",
      "Gender",
      "LastName",
      "SpecialAttributes",
    ],
  },
  contactDetails: {
    root: [
      "Explore.Id",

      "PrimaryApplicant.AddressLine1",
      "PrimaryApplicant.AddressLine2",
      "PrimaryApplicant.City",
      "PrimaryApplicant.EmailHome",
      "PrimaryApplicant.EmailWork",
      "PrimaryApplicant.HomeNumber",
      "PrimaryApplicant.Id",
      "PrimaryApplicant.MobilePhone",
      "PrimaryApplicant.PostalCode",
      "PrimaryApplicant.PreferredContactMethod",
      "PrimaryApplicant.PreferredTitle",
      "PrimaryApplicant.WorkNumber",

      "Partner.EmailHome",
      "Partner.EmailWork",
      "Partner.HomeNumber",
      "Partner.Id",
      "Partner.MobilePhone",
      "Partner.PreferredContactMethod",
      "Partner.WorkNumber",
    ],
    dependents: null,
  },
};

export const filter = (data: any, filterSet: any) => {
  // filter root data
  var root = pick(data, filterSet.root);
  // initialize dependents filter
  var dependents = null;
  // check if dependents was defined
  if (filterSet.dependents) {
    // if so, filter dependents
    dependents = data.Dependents.map((dependent: any) => {
      return pick(dependent, filterSet.dependents);
    });
  }

  // return final filtered object
  return {
    ...root,
    Dependents: dependents,
  };
};
