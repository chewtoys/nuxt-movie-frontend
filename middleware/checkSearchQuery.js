export default function ({ query, redirect }) {
    if (!query.search) {
      return redirect('/')
    }
}