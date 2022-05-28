// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    hero: [
      {
        title: "Hero 01",
        link: "https://codepen.io/ishreyash/embed/QWQOBoO?default-tab=result&theme-id=dark",
        code: `<section class="text-gray-600">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <!-- 720X600        -->
      <img class="object-cover object-center rounded" alt="IMAGE alt" src="https://images.ctfassets.net/dei6wzp97edh/6DWC7yS67JEIxTIqDP0vWr/89ad2eb71f47839648b36567bfc75d3b/umi.jpg" width="720" height="600" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Aenean convallis, massa eu rhoncus.
      </h1>
      <p class="mb-8 leading-relaxed">Quisque at lectus ultricies, varius sapien in, posuere massa. Vivamus eu convallis massa, et sollicitudin neque. Donec sed risus in sem malesuada mattis. Pellentesque in.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>`,
      },
    ],
  });
}
