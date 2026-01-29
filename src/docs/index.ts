import { authDocs } from "./auth.docs";
import { employeeDocs } from "./employee.docs";
import { roleDocs } from "./role.docs";
import { employeeRoleDocs } from "./employeerole.docs";
import { loginHistoryDocs } from "./loginhistory.docs";

export const paths = {
  ...authDocs,
  ...employeeDocs,
  ...roleDocs,
  ...employeeRoleDocs,
  ...loginHistoryDocs,
};