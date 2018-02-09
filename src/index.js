import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  careers: [
    {
      title: 'We have more than 40,000<br>employees worldwide',
      id: 'dc11a56a-3863-477a-8a53-fb64c7bb71e6',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path fill="#694b4b" d="M88.222 159.632c-82.142 0-73.034 99.89-72.659 172.277.014 2.734 1.446 5.198 3.788 6.61 9.102 5.487 34.1 18.316 68.871 18.316s59.769-12.829 68.871-18.316c2.341-1.412 3.774-3.876 3.788-6.61.375-72.387 9.483-172.277-72.659-172.277z"/><path fill="#5a4146" d="M82.93 159.838c-76.395 4.283-67.733 101.295-67.367 172.071.014 2.734 1.446 5.199 3.788 6.61 9.102 5.487 34.1 18.316 68.871 18.316l20.759-145.308"/><path fill="#694b4b" d="M88.222 159.632c-46.706 0-49.949 56.436-49.949 56.436 26.921-4.541 43.463 6.811 70.708-4.541L88.222 356.835c34.772 0 59.769-12.829 68.871-18.316 2.341-1.412 3.774-3.876 3.788-6.61.375-72.387 9.483-172.277-72.659-172.277z"/><path fill="#e6af78" d="M166.864 347.653l-46.307-19.294a10.379 10.379 0 0 1-6.387-9.581v-12.541H62.275v12.541c0 4.191-2.52 7.97-6.387 9.581L9.581 347.653A15.57 15.57 0 0 0 0 362.025v20.759c0 5.732 4.647 10.379 10.379 10.379h155.686c5.732 0 10.379-4.647 10.379-10.379v-20.759a15.568 15.568 0 0 0-9.58-14.372z"/><path fill="#eff2fa" d="M166.864 347.653l-44.773-18.656-33.869 14.618-33.869-14.617-44.772 18.656A15.568 15.568 0 0 0 0 362.025v20.759c0 5.732 4.647 10.379 10.379 10.379h155.686c5.732 0 10.379-4.647 10.379-10.379v-20.759a15.568 15.568 0 0 0-9.58-14.372z"/><path fill="#d29b6e" d="M114.17 306.237H62.275v12.541c0 4.191-2.52 7.97-6.387 9.581l-7.232 3.014c55.345 14.112 65.514-25.136 65.514-25.136z"/><g fill="#e4eaf6"><path d="M25.294 367.729L4.464 351.16C1.673 354.014 0 357.874 0 362.025v20.759c0 5.732 4.647 10.379 10.379 10.379h20.759v-13.276a15.572 15.572 0 0 0-5.844-12.158zm151.151 15.054v-20.759c0-4.119-1.645-7.952-4.397-10.8l-20.898 16.504a15.567 15.567 0 0 0-5.843 12.157v13.275h20.759c5.732.002 10.379-4.645 10.379-10.377zm-87.444 0h-1.557a4.411 4.411 0 0 1-4.411-4.411v-34.745h10.379v34.744a4.411 4.411 0 0 1-4.411 4.412z"/><path d="M88.222 343.616L58.52 321.34a4.151 4.151 0 0 0-5.945 1.018l-5.869 8.803 18.21 25.494a4.152 4.152 0 0 0 5.972.829l17.334-13.868zm0 0l29.702-22.276a4.151 4.151 0 0 1 5.945 1.018l5.869 8.803-18.21 25.494a4.152 4.152 0 0 1-5.972.829l-17.334-13.868z"/></g><path fill="#f0c087" d="M114.17 206.339c-25.948 25.947-76.87 5.188-76.87 46.704l3.222 30.581a20.762 20.762 0 0 0 10.591 16.267l29.548 16.415a15.569 15.569 0 0 0 15.121 0l29.548-16.415a20.756 20.756 0 0 0 10.591-16.267l3.72-36.32c.265-2.582.321-5.179.234-7.769-1.94-13.21-20.516-22.818-25.705-33.196z"/><path fill="#e6af78" d="M37.3 253.043l3.222 30.581a20.762 20.762 0 0 0 10.591 16.267l29.548 16.415c3.263 1.813 7.005 2.282 10.567 1.579 0 0-14.897-4.515-23.764-28.516-2.716-7.352-6.487-46.274-3.243-51.031 6.412-9.402 42.165-10.379 52.729-27.822a29.188 29.188 0 0 1-1.444-1.945c-.035-.052-.078-.105-.114-.158a19.736 19.736 0 0 1-1.223-2.077c-25.947 25.95-76.869 5.191-76.869 46.707z"/><path fill="#e4eaf6" d="M126.106 382.783h-13.493a8.822 8.822 0 0 0-8.822 8.822v1.557h31.137v-1.557a8.822 8.822 0 0 0-8.822-8.822z"/><path fill="#e6af78" d="M442.78 323.524v-28.502h-73.293v28.502l36.646 32.575z"/><path fill="#eff2fa" d="M499.443 336.857l-50.385-11.855a8.087 8.087 0 0 1-2.115-.851l-40.81 23.806L366.915 323a8.112 8.112 0 0 1-3.706 2.003l-50.385 11.855a16.287 16.287 0 0 0-12.557 15.855v31.89a8.144 8.144 0 0 0 8.144 8.144h195.447a8.144 8.144 0 0 0 8.144-8.144v-31.89a16.292 16.292 0 0 0-12.559-15.856z"/><path fill="#d29b6e" d="M369.487 295.022v30.073c46.165 16.632 73.293-24.995 73.293-24.995v-5.078h-73.293z"/><path fill="#f0c087" d="M353.2 201.37l3.549 78.063a24.432 24.432 0 0 0 9.747 18.435l16.836 12.627a24.43 24.43 0 0 0 14.658 4.886h16.287c5.286 0 10.43-1.715 14.658-4.886l16.836-12.627a24.43 24.43 0 0 0 9.747-18.435l3.549-78.063H353.2z"/><path fill="#e6af78" d="M393.918 217.657c16.287 0 40.718-4.071 46.513-16.287H353.2l3.548 78.063a24.432 24.432 0 0 0 9.747 18.435l16.836 12.627a24.43 24.43 0 0 0 14.658 4.886h8.144c-8.144 0-24.431-16.287-24.431-36.647v-48.862c0-4.071 4.072-12.215 12.216-12.215z"/><path fill="#e4eaf6" d="M482.107 366.319l26.385-23.702A16.26 16.26 0 0 1 512 352.711v31.89a8.144 8.144 0 0 1-8.144 8.144h-28.502v-11.28a20.359 20.359 0 0 1 6.753-15.146z"/><path fill="#5b5d6e" d="M416.313 392.745h-20.36l2.546-36.646h15.269z"/><path fill="#515262" d="M416.313 347.955h-20.36v2.352c0 5.448 4.416 9.863 9.863 9.863h.632c5.448 0 9.863-4.416 9.863-9.863v-2.352h.002z"/><path fill="#e4eaf6" d="M368.914 314.46l37.218 33.496s-10.423 5.261-23.286 15.867c-2.653 2.188-6.667 1.301-8.09-1.829l-17.486-38.468 5.532-8.297a4.071 4.071 0 0 1 6.112-.769zm74.437 0l-37.218 33.496s10.423 5.261 23.286 15.867c2.653 2.188 6.667 1.301 8.09-1.829l17.486-38.468-5.532-8.297a4.071 4.071 0 0 0-6.112-.769z"/><path fill="#785550" d="M430.818 174.394l3.818 26.976c17.425 3.485 19.936 30.83 20.298 38.641a8.036 8.036 0 0 0 1.287 3.979l6.649 10.313s-2.276-17.051 8.144-28.502c-.001 0 3.576-67.694-40.196-51.407z"/><path fill="#f0c087" d="M466.954 252.562l-4.599 18.393a4.896 4.896 0 0 1-9.607-.58l-2.351-18.812c-.629-5.031 3.294-9.474 8.363-9.474h.017c5.484-.001 9.507 5.153 8.177 10.473z"/><path fill="#694b4b" d="M357.101 167.099l6.023 4.114c-27.23 20.105-22.141 54.588-22.141 54.588 8.144 8.144 8.144 28.502 8.144 28.502l8.144-8.144s-3.143-23.525 12.216-32.574c14.251-8.398 26.721-4.071 39.445-4.071 34.101 0 43.645-12.852 41.991-28.502-.856-8.099-13.238-24.967-44.789-24.431-12.735.216-36.647 4.072-49.033 10.518z"/><path fill="#5a4146" d="M354.726 205.951s-4.326-17.051 8.398-34.738c-27.23 20.105-22.141 54.588-22.141 54.588 8.144 8.144 8.144 28.502 8.144 28.502l8.144-8.144s-3.143-23.525 12.215-32.574c14.251-8.398 26.721-4.071 39.445-4.071 5.546 0 10.379-.372 14.684-1.008-26.262.881-41.743-19.011-68.889-2.555z"/><path fill="#e6af78" d="M345.311 252.562l4.599 18.393a4.896 4.896 0 0 0 9.608-.58l2.351-18.812c.629-5.031-3.294-9.474-8.364-9.474h-.017c-5.482-.001-9.507 5.153-8.177 10.473z"/><path fill="#e4eaf6" d="M454.995 384.602h-20.36a8.144 8.144 0 0 0-8.144 8.144h36.646a8.142 8.142 0 0 0-8.142-8.144z"/><path fill="#694b4b" d="M256.155 57.5c-139.642 0-124.158 169.814-123.52 292.871.024 4.647 2.458 8.838 6.439 11.237 15.474 9.328 57.97 31.137 117.081 31.137s101.607-21.809 117.081-31.137c3.98-2.4 6.415-6.59 6.439-11.237.638-123.058 16.122-292.871-123.52-292.871z"/><path fill="#5a4146" d="M247.157 57.849C117.286 65.13 132.011 230.051 132.635 350.37c.024 4.647 2.458 8.838 6.439 11.237 15.474 9.328 57.97 31.137 117.081 31.137l35.289-247.023"/><path fill="#694b4b" d="M256.155 57.5c-79.4 0-84.914 95.942-84.914 95.942 45.765-7.719 73.886 11.579 120.203-7.719l-35.289 247.023c59.111 0 101.607-21.809 117.081-31.137 3.98-2.4 6.415-6.59 6.439-11.237.638-123.059 16.122-292.872-123.52-292.872z"/><path fill="#785550" d="M379.675 350.372c.548-105.742 11.962-245.906-73.41-283.286-1.489 7.736-4.185 29.331 2.823 43.348 17.645 35.289 35.289 35.289 52.933 61.756 17.644 97.045-33.714 200.047-50.771 214.068 30.222-7.188 51.887-18.562 61.985-24.649 3.981-2.4 6.416-6.59 6.44-11.237z"/><path fill="#e6af78" d="M389.846 377.137l-78.722-32.801a17.644 17.644 0 0 1-10.858-16.288v-21.32h-88.222v21.32a17.646 17.646 0 0 1-10.858 16.288l-78.722 32.801a26.467 26.467 0 0 0-16.287 24.431v35.289c0 9.744 7.9 17.645 17.644 17.645h264.667c9.744 0 17.644-7.9 17.644-17.645v-35.289a26.464 26.464 0 0 0-16.286-24.431z"/><path fill="#b4e1fa" d="M389.846 377.137l-76.114-31.714-57.577 24.849-57.577-24.849-76.114 31.714a26.467 26.467 0 0 0-16.287 24.431v35.289c0 9.744 7.9 17.645 17.644 17.645h264.667c9.744 0 17.644-7.9 17.644-17.645v-35.289a26.464 26.464 0 0 0-16.286-24.431z"/><path fill="#d29b6e" d="M300.266 306.728h-88.222v21.32a17.646 17.646 0 0 1-10.858 16.288l-12.295 5.124c94.087 23.989 111.375-42.732 111.375-42.732z"/><g fill="#a0d2f0"><path d="M149.178 411.265l-35.411-28.167c-4.744 4.852-7.588 11.413-7.588 18.469v35.289c0 9.744 7.9 17.644 17.644 17.644h35.289v-22.568a26.475 26.475 0 0 0-9.934-20.667zm256.955 25.591v-35.289c0-7.002-2.797-13.518-7.475-18.359l-35.526 28.057a26.468 26.468 0 0 0-9.933 20.667V454.5h35.289c9.745.001 17.645-7.899 17.645-17.644zm-149.978 0a8.822 8.822 0 0 1-8.822-8.822v-57.742h17.644v57.743a8.821 8.821 0 0 1-8.822 8.821z"/><path d="M256.155 370.272l-50.494-37.871a7.058 7.058 0 0 0-10.107 1.731l-9.977 14.966 30.957 43.339a7.058 7.058 0 0 0 10.152 1.409l29.469-23.574zm0 0l50.494-37.871a7.058 7.058 0 0 1 10.107 1.731l9.977 14.966-30.957 43.339a7.058 7.058 0 0 1-10.152 1.409l-29.469-23.574z"/></g><path fill="#f0c087" d="M300.266 136.9c-44.111 44.111-130.679 8.822-130.679 79.4l5.479 51.989a35.286 35.286 0 0 0 18.006 27.653l50.231 27.906a26.466 26.466 0 0 0 25.707 0l50.231-27.906a35.293 35.293 0 0 0 18.006-27.653l6.324-61.745c.45-4.388.546-8.803.397-13.208-3.303-22.457-34.88-38.792-43.702-56.436z"/><path fill="#e6af78" d="M169.587 216.3l5.479 51.989a35.286 35.286 0 0 0 18.006 27.653l50.231 27.906c5.547 3.081 11.908 3.88 17.963 2.685 0 0-25.326-7.674-40.398-48.477-4.617-12.5-11.028-78.665-5.514-86.752 10.899-15.985 71.681-17.645 89.641-47.298a49.282 49.282 0 0 1-2.455-3.308c-.061-.089-.133-.179-.193-.268-.78-1.172-1.488-2.348-2.079-3.53-44.113 44.111-130.681 8.822-130.681 79.4z"/></svg>',
      },
    },
    {
      title: 'We serve more than 24,000<br>pharmacies',
      id: '80c3446a-8a89-4652-89bb-b861e55f3f7d',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 420.704 420.704" style="enable-background:new 0 0 420.704 420.704;" xml:space="preserve"><g><g><g><path style="fill:#80362D;" d="M269.575,12.724l-46.062,250.052l32.902,6.58C326.056,218.359,355.941,12.724,269.575,12.724z"/></g><g><path style="fill:#80362D;" d="M269.575,12.724c-11.516-6.992-72.293-24.749-118.446,0 C94.374,43.158,44.747,152.007,124.808,262.776c0.114,0.157,59.223-6.58,59.223-6.58L269.575,12.724z"/></g><g><path style="fill:#FFD7A3;" d="M256.772,232.084h-0.358v-15.37H164.29v15.354c0,15.042-0.063,31.392-13.161,41.282v147.354 h59.223c0,0,31.011,0,59.223,0V273.12C256.812,263.205,256.772,246.997,256.772,232.084z"/></g><g><path style="fill:#545465;" d="M210.352,354.9c-14.15,0-27.502-1.876-39.482-5.134v70.937h92.124v-75.279 C248.066,351.381,229.941,354.9,210.352,354.9z"/></g><g><path style="fill:#FDC88E;" d="M262.994,302.258c2.401,0.655,4.563,1.004,6.58,1.174V273.12 c-12.762-9.915-12.803-26.124-12.803-41.037l-0.009-0.382v-15.37l-72.732,0.382l-19.741,6.58 C177.45,238.1,217.755,289.92,262.994,302.258z"/></g><g><path style="fill:#FFE1B2;" d="M302.476,131.169c0,52.696-52.408,118.446-92.124,118.446s-92.124-65.75-92.124-118.446 s41.246-72.384,92.124-72.384S302.476,78.473,302.476,131.169z"/></g><g><path style="fill:#80362D;" d="M223.512,25.884c-3.697,0-15.701,4.154-25.512,7.794l-0.809-1.214c0,0-1.354,1.064-3.698,2.908 c-5.457,2.072-9.462,3.672-9.462,3.672l1.539,2.566c-24.976,19.678-81.96,64.693-87.084,69.818 c-6.58,6.58,39.482,174.464,39.482,78.964c0-79.786,44.327-95.587,85.544-105.285c18.644-4.387,24.128-15.354,26.321-26.321 C252.027,47.819,230.093,25.884,223.512,25.884z"/></g><g><path style="fill:#80362D;" d="M243.253,65.366c12.064,43.32,36.192,62.924,58.812,68.682c12.395,3.155,6.992-35.78,6.992-35.78 s-17.548-44.966-19.741-46.062c-2.193-1.097-19.741-39.482-19.741-39.482l-39.482,32.902L243.253,65.366z"/></g><g><path style="fill:#E4EBF0;" d="M158.355,265.465c-6.163,10.013-18.728,17.052-44.514,17.052h-2.193 c-39.976,0-72.384,32.407-72.384,72.384v46.062c0,10.902,8.838,19.741,19.741,19.741h135.028L158.355,265.465z"/></g><g><path style="fill:#E4EBF0;" d="M262.349,265.465c6.163,10.013,18.728,17.052,44.514,17.052h2.193 c39.976,0,72.384,32.407,72.384,72.384v46.062c0,10.902-8.838,19.741-19.741,19.741H226.671L262.349,265.465z"/></g><g><circle style="fill:#D0D7DC;" cx="111.647" cy="387.802" r="19.741"/></g><g><path style="fill:#D0D7DC;" d="M333.783,410.338l-8.135-5.591c7.229-10.518,11.376-26.288,11.376-43.267 c0-29.427-12.807-54.288-27.966-54.288s-27.966,24.861-27.966,54.288c0,16.979,4.146,32.749,11.376,43.267l-8.135,5.591 c-8.331-12.123-13.111-29.931-13.111-48.858c0-35.977,16.619-64.158,37.837-64.158c21.217,0,37.837,28.182,37.837,64.158 C346.893,380.407,342.114,398.215,333.783,410.338z"/></g><g><circle style="fill:#545465;" cx="289.316" cy="407.543" r="6.58"/></g><g><circle style="fill:#545465;" cx="328.798" cy="407.543" r="6.58"/></g><g><path style="fill:#D0D7DC;" d="M111.647,379.577c-2.726,0-4.935-2.209-4.935-4.935c0-85.274,40.304-108.646,42.02-109.599 c2.387-1.329,5.388-0.466,6.71,1.917c1.321,2.374,0.472,5.367-1.892,6.698c-0.484,0.28-36.968,22.172-36.968,100.984 C116.582,377.368,114.373,379.577,111.647,379.577z"/></g><g><circle style="fill:#B2B9BF;" cx="111.647" cy="387.802" r="10.419"/></g><g><path style="fill:#D0D7DC;" d="M309.057,307.195c-2.034,0-3.938-1.268-4.654-3.295c-4.288-12.15-11.268-17.291-11.337-17.339 c-2.233-1.563-2.776-4.641-1.213-6.874c1.563-2.23,4.636-2.774,6.874-1.213c0.389,0.273,9.585,6.842,14.984,22.143 c0.908,2.569-0.442,5.388-3.012,6.296C310.155,307.103,309.601,307.195,309.057,307.195z"/></g></g><g><path style="fill:#FFE1B2;" d="M292.676,131.771c10.767-2.468,17.821,2.805,17.821,13.161c0,13.709-14.479,47.296-29.701,26.321 S292.676,131.771,292.676,131.771z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
      },
    },
    {
      title: 'We’re in nearly 85% of U.S.<br>hospitals.',
      id: '83cc85d7-1543-44f3-9926-6c8b20909dcd',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 504.717 504.717" style="enable-background:new 0 0 504.717 504.717;" xml:space="preserve"><path style="fill:#E3BD59;" d="M94.229,16.099L16.247,94.081c-21.662,21.662-21.662,56.32,0,77.982l316.259,316.258 c21.662,21.662,56.32,21.662,77.982,0l77.982-77.982c21.662-21.662,21.662-56.32,0-77.982L171.816,16.099 C150.549-5.168,115.496-5.168,94.229,16.099z"/><path style="fill:#DAB555;" d="M404.717,248.792l12.812,12.812L261.854,417.279l-12.812-12.812L404.717,248.792z M99.648,254.999 l-12.812-12.812L242.512,86.511l12.812,12.812L99.648,254.999z"/><path style="fill:#EFC75E;" d="M410.094,16.099l77.982,77.982c21.662,21.662,21.662,56.32,0,77.982L171.816,488.321 c-21.662,21.662-56.32,21.662-77.982,0l-77.588-77.982c-21.662-21.662-21.662-56.32,0-77.982l316.26-316.258 C353.773-5.168,388.827-5.168,410.094,16.099z"/><path style="fill:#F2D27E;" d="M281.306,142.13l80.738,80.738c11.028,11.028,11.028,29.145,0,40.172l-98.855,98.855 c-11.028,11.028-29.145,11.028-40.172,0l-80.738-80.738c-11.028-11.028-11.028-29.145,0-40.172l98.855-98.855 C252.161,131.103,270.279,131.103,281.306,142.13z"/><path style="fill:#CAA648;" d="M243.104,192.149c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0 c3.938-3.938,3.938-10.24,0-13.785C253.343,188.21,247.041,188.21,243.104,192.149z M215.533,219.718 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C225.773,215.779,219.472,215.779,215.533,219.718z M187.964,247.287c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C198.204,243.349,191.903,243.349,187.964,247.287z M270.672,219.718c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C280.913,215.779,274.611,215.779,270.672,219.718z M243.104,247.287c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C253.343,243.349,247.041,243.349,243.104,247.287z M215.533,274.856c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C225.773,270.918,219.472,270.918,215.533,274.856z M298.241,247.287c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C308.482,243.349,302.18,243.349,298.241,247.287z M270.672,274.856c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C280.913,270.918,274.611,270.918,270.672,274.856z M243.104,302.426c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C253.343,298.487,247.041,298.487,243.104,302.426z M373.073,62.18c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C383.313,58.241,377.01,58.241,373.073,62.18z M345.504,89.749c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0 c3.938-3.938,3.938-10.24,0-13.785C355.743,85.81,349.441,85.81,345.504,89.749z M317.934,117.318 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C328.173,113.38,321.872,113.38,317.934,117.318z M373.073,117.318c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C383.313,113.38,377.01,113.38,373.073,117.318z M442.389,117.318c-3.938-3.938-10.24-3.938-13.785,0c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0 C446.327,127.164,446.327,120.863,442.389,117.318z M414.819,144.887c-3.938-3.938-10.24-3.938-13.785,0 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0C418.758,154.733,418.758,148.432,414.819,144.887z M373.073,172.456c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C383.313,168.518,377.01,168.518,373.073,172.456z M117.072,318.179c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C127.312,314.241,121.01,314.241,117.072,318.179z M89.503,345.749c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C99.743,341.81,93.441,341.81,89.503,345.749z M61.933,373.318c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0 c3.938-3.938,3.938-10.24,0-13.785C72.173,369.38,65.872,369.38,61.933,373.318z M117.072,373.318 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C127.312,369.38,121.01,369.38,117.072,373.318z M172.21,373.318c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C182.451,369.38,176.149,369.38,172.21,373.318z M144.641,400.887c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C154.882,396.949,148.579,396.949,144.641,400.887z M117.072,428.456c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C127.312,424.518,121.01,424.518,117.072,428.456z M420.333,365.441c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C430.573,361.503,424.272,361.503,420.333,365.441z M392.764,337.872c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C403.004,333.933,396.703,333.933,392.764,337.872z M365.59,365.441c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C375.435,361.503,369.133,361.503,365.59,365.441z M365.59,420.186c-3.938,3.938-3.938,10.24,0,13.785 c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785C375.435,416.641,369.133,416.641,365.59,420.186z M338.02,392.616c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0c3.938-3.938,3.938-10.24,0-13.785 C347.866,389.072,341.564,389.072,338.02,392.616z M83.989,125.195c-3.938-3.938-10.24-3.938-13.785,0 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0C87.927,135.041,87.927,128.74,83.989,125.195z M111.558,152.764c-3.938-3.938-10.24-3.938-13.785,0c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0 C115.496,162.61,115.496,156.309,111.558,152.764z M139.128,125.195c-3.938-3.938-10.24-3.938-13.785,0 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0C143.066,135.041,143.066,128.74,139.128,125.195z M139.128,83.841c3.938-3.938,3.938-10.24,0-13.785c-3.938-3.938-10.24-3.938-13.785,0c-3.938,3.938-3.938,10.24,0,13.785 C128.887,87.78,135.189,87.78,139.128,83.841z M166.697,97.626c-3.938-3.938-10.24-3.938-13.785,0 c-3.938,3.938-3.938,10.24,0,13.785c3.938,3.938,10.24,3.938,13.785,0S170.242,101.564,166.697,97.626z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
      },
    },
  ],
  title: 'Careers',
  subtitle:
    'Do you want to join our company? Check the list of open vacancies or contact our HR director to get to know about open positions.',
  text:
    'Why consider a future with Cardinal Health? As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact on our customers and communities. We think of ourselves as the business behind healthcare because we focus on making it more cost-effective. We\'re an essential link that allows healthcare providers to reduce costs, improve operations and increase quality, so that they can offer better care to their patients. Here are a few facts about us:',
  picture: {
    resourceRef: 'man.jpg',
    alt: 'Illustration',
  },
  'button-1': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Additional button (M)',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  background: {
    type: 'color',
    color: '#1d1d1d',
  },
}

ExtendedWireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Careers main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Careers icon', type: 'checkbox'},
  image: {defaultValue: true, label: 'Сareers photo', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
