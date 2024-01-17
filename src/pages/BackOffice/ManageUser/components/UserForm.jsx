import React, {useEffect} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import {useFormik} from "formik";
import { useCreateUser } from '../../../../features/user/useCreateUser';
import { useFetchCompany } from '../../../../features/company/useFetchCompany';
import useFetchPartnership from '../../../../features/partnership/useFetchPartnership';
import { useCompanies } from '../../../../features/company/useCompanies';
import IconSearch from "../../../../assets/icons/Icon Search.svg";
import { useFetchRoles } from '../../../../features/user/useFetchRoles';
import Loading from '../../../../components/Loading'
import { useFetchUser } from '../../../../features/user/useFetchUser';
import {useEditUser} from "../../../../features/user/useEditUser.js";
import {useFetchAccessibility} from "../../../../features/user/useFetchAccessibility.js";
export const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {data,isLoading:isLoadingCompany} = useCompanies()
  const {data:roles,isLoading:isLoadingRoles} = useFetchRoles()
  const {data:user} = useFetchUser(id)
  console.log(user)

  const formik = useFormik({
    initialValues:{
      id: null,
      username: "",
      name: "",
      email: "",
      rolesList: "",
      password:"string",
      companyRequests:[]
    },
    enableReinitialize: true,
    //validationSchema: validationSchema,
    onSubmit:()=>{
      const requestData = {
        username: formik.values.username,
        name: formik.values.name,
        email: formik.values.email,
        password:formik.values.password,
        rolesList: formik.values.rolesList[0],
      };

      if(id){
        requestData.id = formik.values.id
        requestData.roles = formik.values.rolesList;
        delete requestData.rolesList;
      }

      if (formik.values.rolesList[0] === "RELATIONSHIP_MANAGER" && id) {
        requestData.companies = formik.values.companyRequests;
      }
      if (formik.values.rolesList[0] === "RELATIONSHIP_MANAGER" && !id) {
        requestData.companyRequests = formik.values.companyRequests;
      }

      if (id) {
        editUser(requestData);
      } else {
        createUser(requestData);
      }
    }
})
  useEffect(() => {
    if (id && user) {
      formik.setValues({
        id: user?.data?.id || null,
        username: user?.data?.username || '',
        name: user?.data?.name || '',
        email: user?.data?.email || '',
        rolesList: [user?.data?.roles] || [],
        companyRequests: user?.data?.companyRequests || [],
      });
    }
  }, [id, user]);

const handleFormInput = (e) => {
  const { name } = e.target;
      formik.setFieldValue(name, e.target.value);
};


const {mutate:editUser,isPending:isPendingCreateUser} = useEditUser({
    onSuccess:() =>{
        formik.resetForm();
        alert("Success Edit User")
        navigate("/backoffice/user");
    }
})

  const {mutate:createUser,isPending} = useCreateUser({
    onSuccess:() =>{
      formik.resetForm();
      alert("Success Add User")
      navigate("/backoffice/user");
    }
  })
const check = roles?.data.find((role) => formik.values.rolesList === role.roleName)
  console.log(formik.values.rolesList)
  const {data:accessibility} = useFetchAccessibility(formik.values.rolesList || formik.values.rolesList[0])
  console.log(accessibility,'check')
console.log(formik.values)
  return (
    <>
    {isPendingCreateUser ||isPending || isLoadingCompany || isLoadingRoles ? <Loading/> :
    (
      <>
      <div className="relative flex justify-between mb-6 mx-4">
      <h1 className="text-title my-auto">{id ? "Edit User" : "Add User"}</h1>
    </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <form
        onSubmit={formik.handleSubmit}
        className="p-6"
        encType="multipart/form-data"
      >
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-full">
            <label className="block mb-2 text-[18px] font-medium">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleFormInput}
                value={formik.values.username}
                className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label className="block mb-2 text-[18px] font-medium">Name</label>
            <div className="mt-2 flex">
              <input
                type="text"
                name="name"
                placeholder="User"
                className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                onChange={handleFormInput}
                // onBlur={handleBlur}
                value={formik.values.name}
                //   min={currentDate}
              />
              {/* <img src={IconCalender} alt="" className="absolute" /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label className="block mb-2 text-[18px] font-medium">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="user@email.com"
                className="block rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 w-full"
                onChange={handleFormInput}
                // onBlur={handleBlur}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className="col-span-3">
            <label className="block text-[18px] font-medium leading-6">
              Role
            </label>
            <div className="mt-2 gap-y-2 flex flex-col">
              {roles?.data.map((role)=>{
                return(
                  <div key={role.id}>
                  <input
                    type="radio"
                    name="rolesList"
                    onChange={() => formik.setFieldValue('rolesList[0]', role.roleName)}
                    value={role.roleName}
                    checked={role.roleName === formik.values.rolesList[0]}
                    className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                  />
                  <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                  {role.roleName.replace(/_/g, ' ')}
                  </label>
                </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-3">
            <div className="mt-2 gap-y-2 flex flex-col">
            {/* <form>
                  <div className="flex items-center py-2">
                    <input
                      className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12 "
                      id="email"
                      type="text"
                      placeholder="Search..."
                      // onChange={handleSearch}
                      // value={searchTerm}
                    />
                    <img
                      src={IconSearch}
                      className="absolute ml-5"
                      alt="Search Icon"
                    />
                    <button
                      className="bg-orange text-white rounded-r-lg focus:outline-none focus:shadow-outline w-24 h-11 disabled:bg-opacity-70"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form> */}
              {formik.values.rolesList[0] === "RELATIONSHIP_MANAGER" ?
              (
                <>
               <label className="block text-[18px] font-medium leading-6">
              Company
            </label>
                <form>
                <div className="flex items-center py-2">
                  <input
                    className="border-none bg-orange bg-opacity-10 rounded-l-lg w-72 h-11 placeholder:opacity-50 pl-12 "
                    id="email"
                    type="text"
                    placeholder="Search..."
                    // onChange={handleSearch}
                    // value={searchTerm}
                  />
                  <img
                    src={IconSearch}
                    className="absolute ml-5"
                    alt="Search Icon"
                  />
                  <button
                    className="bg-orange text-white rounded-r-lg focus:outline-none focus:shadow-outline w-24 h-11 disabled:bg-opacity-70"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
                {data.map((company) => {
                return (
                  <div key={company.companyId}>
                    <input
                      type="checkbox"
                      name="companyRequests"
                      onChange={formik.handleChange}
                      value={company.companyId}
                      checked={formik.values.companyRequests.includes(company.companyId)}
                      className="rounded-md checked:bg-orange w-6 h-6 border-2 border-orange checked:ring-orange"
                    />
                    <label className="ms-4 text-sm font-medium text-gray dark:text-gray-300 text-center">
                      {company.companyName}
                    </label>
                  </div>
                );
              })}  </>)
                : (
                  <div>
                      <label className="block text-[18px] font-medium leading-6 mb-5">
                      Access
            </label>

                    <p>Dashboard</p>
                    <p>Manage Compony</p>
                    <p>Manage BO User</p>
                  </div>
                )}

              <div className="relative flex justify-between px-6 mb-4 text-[12px] text-graylight/10">
                {/* <p className="my-auto">
                  Showing {paging.page} to {paging.size} of {paging.count}{" "}
                  entries
                </p> */}

                <nav aria-label="Page navigation example">
                  {/* <ul className="flex items-center -space-x-px h-8 text-sm gap-4">
                    <li className={`${currentPage == 1 && "disabled"}`}>
                      <button
                        onClick={() => onPrevious(currentPage)}
                        className="flex items-center justify-center px-1 h-8 ms-0 leading-tight text-gray-500 bg-gray/20 rounded-s-lg hover:bg-orange/20 hover:text-orange"
                      >
                        <ChevronLeftOutlined />
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>
                    {Array(paging.totalPages)
                      .fill(null)
                      .map((_, idx) => {
                        const page = ++idx;
                        return (
                          <li key={page}>
                            <Link
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-200 bg-gray/20 rounded-md hover:bg-orange/20 hover:text-orange page-link ${
                                currentPage == page &&
                                "bg-gray/20 text-orange font-bold"
                              }`}
                              to={`/user/invoice?page=${page}&size=${currentSize}`}
                            >
                              {page}
                            </Link>
                          </li>
                        );
                      })}
                    <li
                      className={`${
                        currentPage >= paging.totalPages && "disabled"
                      }`}
                    >
                      <button
                        onClick={() => onNext(currentPage)}
                        className="flex items-center justify-center px-1 h-8 leading-tight text-gray bg-gray/20 rounded-e-lg hover:bg-orange/20 hover:text-orange "
                      >
      
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul> */}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            // disabled={!isValid || !dirty}
            className="text-[18px] py-3 lg:py-5 rounded-lg font-normal bg-orange leading-6 text-white w-full border-2 border-white hover:text-orange hover:bg-white hover:border-orange flex justify-center gap-3"
          >
            {/* <img src={IconUpload} alt="Icon Upload" /> */}
             {id ? "Edit User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
      </>
    )
    
    }
    </>
    
    
  )
}
