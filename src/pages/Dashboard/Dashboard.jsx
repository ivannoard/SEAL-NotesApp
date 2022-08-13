import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Input from "../../components/dashboard/input/Input"
import UtilsButton from "../../components/dashboard/utilsButton/UtilsButton"
import Navbar from "../../components/navbar/Navbar"
import AddCard from "../../components/dashboard/card/AddCard"
import NoteCard from "../../components/dashboard/card/NoteCard"

const Dashboard = () => {
  const user = useSelector(state => state.user.user)
  const data = [
    {
      id: '1',
      name: 'my notebook',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '2',
      name: 'my notebook2',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '3',
      name: 'my notebook3',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '4',
      name: 'my notebook4',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '5',
      name: 'my notebook5',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '6',
      name: 'my notebook6',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '7',
      name: 'my notebook7',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    },
    {
      id: '8',
      name: 'my notebook8',
      content: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut libero dolor doloribus laborum numquam cupiditate cum voluptates corrupti perferendis rerum fugiat cumque nemo, commodi reprehenderit, praesentium modi. Quam, modi, reiciendis nam similique corporis, facilis excepturi dolor animi totam incidunt explicabo aperiam cum nulla ab minus optio id magnam! Quia, consectetur soluta? Enim iusto temporibus quo aliquid, inventore sint ipsum voluptatum error pariatur architecto. Unde ipsum similique numquam vel repellendus fuga? Obcaecati nemo dolor voluptate laudantium id, libero commodi similique voluptatem rem, dolores odio. Tenetur voluptatum deleniti tempora officia eos repudiandae voluptatem dicta maiores distinctio. Libero corporis ut unde culpa.'
    }
  ]

  return (
    <>
      {user ? (
        <div className="Dashboard" style={{ minHeight: '100vh' }}>
          <Navbar />
          <div className="container mt-md-5 ">
            {/* Code Here */}
            {/* top */}
            <div className="row">
              <div className="col-md-6">
                <Input />
              </div>
              <div className="col-md-6">
                <UtilsButton />
              </div>
            </div>
            {/* bottom */}
            <div className="d-flex flex-wrap mt-4 gap-3 justify-content-center justify-content-md-start">
              <AddCard />
              {data.map((item) => (
                <NoteCard modalData={item} modalDataId={item.id} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      ) : <Navigate to='/login' />}
    </>
  )
}

export default Dashboard