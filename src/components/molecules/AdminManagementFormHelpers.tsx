export const cancelEditModeHelper = (el: any, newObj: any) => {
  const { id } = el;
  newObj[id]['editMode'] = false;
  newObj[id]['organizationValue'] = el.roles;
  return newObj;
};
export const saveEditModeHelper = (element: any, newObj: any) => {
  const { id, organizationName } = element;
  newObj[id]['editMode'] = false;
  return newObj;
};

export const changeEditObjectHelper = (element: any, newObj: any) => {
  const { id, organizationName } = element;
  if (!newObj[id]) {
    newObj[id] = {
      editMode: true,
      organizationValue: organizationName,
    };
  } else {
    newObj[id]['editMode'] = true;
  }
  return newObj;
};

export const changeCurrentSelectedRoleHelper = (newObject: any, id: any, newCompanyValue: any) => {
  newObject[id] = {
    editMode: true,
    organizationValue: newCompanyValue,
  };
  return newObject;
};

export type IeditObjList = Record<
  string,
  {
    editMode: boolean;
    organizationValue: string;
  }
>;

export interface IProps {
  isShowing: boolean;
  onClose: () => void;
  defaultValues: Array<{ name: string; mail: string; roles: string; id: string }>;
  labels: Array<string>;
}