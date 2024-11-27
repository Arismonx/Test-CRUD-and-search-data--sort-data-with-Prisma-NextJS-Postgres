import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET (
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const postId = Number(id)
    const post = await prisma.post.findUnique({
      where: {
        id: postId
      },
      include: {
        category: true
      }
    })
    return Response.json(post)
  } catch (error) {
    return Response.json(error)
  }
}

export async function PUT (
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content, categoryId } = await request.json()
    const { id } = await params
    const postId = Number(id)
    const updatePost = await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        title,
        content,
        categoryId: Number(categoryId),
      },
      include: {
        category: true
      }
    })

    return Response.json(updatePost)
  } catch (error) {
    return Response.json(error)
  }
}

export async function DELETE (
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const postId = Number(id)
    const deletePost = await prisma.post.delete({
      where: { id: postId }
    })

    return Response.json(deletePost)
  } catch (error) {
    return Response.json(error)
  }
}
