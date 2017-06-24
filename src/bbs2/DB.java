package bbs2;

import java.sql.*;
import java.util.List;

public class DB {
	
	public static Connection getConn() {
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/bbs?user=root&password=sakura&useSSL=true");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	public static Statement getStm(Connection conn) {
		Statement stm = null;
		try {
			stm = conn.createStatement();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return stm;
	}

	public static ResultSet getRs(Statement stm , String sql) {
		ResultSet rs = null;
		try {
			rs = stm.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static void close(Connection conn){
		if(conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public static void close(Statement stm){
		if(stm != null) {
			try {
				stm.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public static void close(ResultSet rs){
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public static int executeUpdate(Connection conn, String sql) {
		int ret = 0;
		Statement stmt = null;
		try {
			stmt = conn.createStatement();
			ret = stmt.executeUpdate(sql);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(stmt);
		}
		return ret;
	}
	
	public static PreparedStatement prepareStmt(Connection conn, String sql) {
		PreparedStatement pstmt = null;
		try {
			pstmt = conn.prepareStatement(sql);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return pstmt;
	}
	
	public static PreparedStatement prepareStmt(Connection conn, String sql, int autoGeneratedKeys) {
		PreparedStatement pstmt = null;
		try {
			pstmt = conn.prepareStatement(sql, autoGeneratedKeys);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return pstmt;
	}
	public static void init(ResultSet rs,List<Article> list,Connection conn) throws SQLException{
		while(rs.next()) {
			Article article = new Article();
			article.setId(rs.getInt("id"));
			article.setPid(rs.getInt("pid"));
			article.setRootId(rs.getInt("rootid"));
			article.setTitle(rs.getString("title"));
			article.setCont(rs.getString("cont"));
			article.setIsleaf((rs.getInt("isleaf") == 1)? true : false);
			article.setTime(rs.getDate("pdate"));
			Statement writerStm = DB.getStm(conn);
			ResultSet writerRs = DB.getRs(writerStm, "select name from writer where id = "+rs.getInt("writer_id"));
			while(writerRs.next()){
			article.setWriter(writerRs.getString("name"));
			}
			writerRs.close();
			list.add(article);
		}
	}

}
