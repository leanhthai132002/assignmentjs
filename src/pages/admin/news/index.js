import NavAdmin from "../../../components/NavAdmin";
import data from "../../../data";
const AdminNewsPage = {
  render() {
    return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <!-- Heroicon name: solid/check -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                <div>
                <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Ảnh
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Tiêu Đề
      </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Ngày Tạo
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Nội Dung Chính
        </th>
        <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <a href="">Sửa</a>
        </th>
        <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <a href="">Xóa</a>
      </th>
      </tr>
    </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        ${data.map((post) => /* html */`
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                <a href="/news/${post.id}">
                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                </a>
                </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <a href="/news/${post.id}">
              <div class="text-sm text-gray-900">${post.title}</div>
            </a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                12/12/2021
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">
            ${post.desc}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/news/edit/${post.id}" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">sửa</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">xóa</a>
          </td>
          </tr>
          `).join("")}
          <!-- More people... -->
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

                </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
  },
};
export default AdminNewsPage;
